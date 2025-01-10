import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import JobCard from "./JobCard";
import Pagination from "../Pagination/Pagination";
import { fetchGraphQLData } from "../../services/graphqlService";
import LoadingModal from "../UI/LoadingModal";

interface Job {
  title: string;
  quantity: number;
  expiredDate: string;
  createdAt: string;
  onschool_locations: { name: string }[];
  slug: string;
  department: string;
  isHighlighted: boolean;
}

const JobSearch: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [departments, setDepartments] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);

  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const jobsPerPage = 5;

  // Fetch unique departments and locations for filter dropdowns
  const fetchFilters = async () => {
    try {
      const filterQuery = {
        query: `
          query {
            jobs {
              department
              onschool_locations {
                name
              }
            }
          }
        `,
      };

      const response = await fetchGraphQLData<{ jobs: Job[] }>(filterQuery);
      if (response.errors) {
        setError("Failed to fetch filter data.");
      } else {
        // Extract unique departments and locations
        const uniqueDepartments = Array.from(
          new Set(response.data.jobs.map((job) => job.department))
        );
        const uniqueLocations = Array.from(
          new Set(
            response.data.jobs.flatMap((job) =>
              job.onschool_locations.map((loc) => loc.name)
            )
          )
        );

        setDepartments(uniqueDepartments);
        setLocations(uniqueLocations);
      }
    } catch (err) {
      setError("An error occurred while fetching filter data.");
    }
  };

  // Fetch jobs with filters and pagination
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const graphqlQuery = {
        query: `
          query Jobs($filters: JobFiltersInput) {
            jobs(filters: $filters) {
              title
              quantity
              expiredDate
              createdAt
              slug
              department
              onschool_locations {
                name
              }
              isHighlighted
            }
          }
        `,
        variables: {
          filters: {
            department: selectedDepartment
              ? { eq: selectedDepartment }
              : undefined,
            onschool_locations: selectedLocation
              ? { name: { eq: selectedLocation } }
              : undefined,
            title: searchTerm ? { contains: searchTerm.toUpperCase() } : undefined,
          },
        },
      };

      const response = await fetchGraphQLData<{ jobs: Job[] }>(graphqlQuery);

      if (response.errors) {
        setError("Failed to fetch jobs data.");
      } else {
        const allJobs = response.data.jobs.sort((a, b) => {
          // Ưu tiên isHighlighted
          if (a.isHighlighted === b.isHighlighted) {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
          return b.isHighlighted ? 1 : -1;
        });
        setJobs(allJobs);
        setTotalPages(Math.ceil(allJobs.length / jobsPerPage)); // Cập nhật tổng số trang
      }
    } catch (err) {
      setError("An error occurred while fetching jobs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilters(); // Fetch departments and locations initially
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [selectedDepartment, selectedLocation, searchTerm]);

  useEffect(() => {
    // Reset về trang đầu tiên khi bộ lọc thay đổi
    setCurrentPage(1);
  }, [selectedDepartment, selectedLocation, searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const visibleJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  if (error) return <div>{error}</div>;

  return (
    <div
      id="job-opportunities"
      className="w-full py-16 px-32 max-md:px-4 max-md:py-6"
    >
      <section
        id="tuyen-dung"
        className="max-w-[1184px] mx-auto flex flex-col bg-white gap-12 min-w-[320px] max-md:gap-6"
      >
        <h1 className="text-5xl font-bold text-center text-neutral-800 max-md:text-3xl">
          Bài tập trái tim
        </h1>

        <div className="flex flex-col items-center w-full min-w-[320px] max-md:max-w-full">
          <section className="flex flex-wrap gap-6 items-center max-md:gap-4">
            <SearchBar onSearch={(value) => setSearchTerm(value)} />
            <div className="flex flex-wrap gap-6 max-md:gap-4 self-stretch my-auto text-xl min-h-[60px] min-w-[240px] text-neutral-700 max-md:max-w-full">
              {/* <FilterDropdown
                label="Luyện tập"
                options={departments}
                onChange={(value) => setSelectedDepartment(value)}
              /> */}
              <FilterDropdown
                label="Lớp học"
                options={locations}
                onChange={(value) => setSelectedLocation(value)}
              />
            </div>
          </section>
          <div className="flex flex-col mt-6 w-full max-w-[1440px] min-w-[320px] max-md:mt-0">
            {visibleJobs.length > 0 ? (
              visibleJobs.map((job, index) => <JobCard key={index} {...job} />)
            ) : (
              <p className="text-center">Không tìm thấy công việc.</p>
            )}
          </div>
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </section>
    </div>
  );
};

export default JobSearch;
