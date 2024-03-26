interface CardProps {
  item: {
    imageUrl: string;
    title: string;
    subTitle: string;
    description: string;
    relatedTopics: string[];
  };
}

interface JobState {
  opportunities: Opportunity[];
  selectedOpportunity: Opportunity | null;
}

interface RootState {
  jobs: JobState; // Assuming 'jobs' is the slice name
}

interface Opportunities {
  data: any[]; // Replace 'any' with the actual type of data in your array
  success: boolean;
  message: string;
  errors: null | any; // Replace 'any' with the actual type of errors if applicable
  count: number;
}

interface SingleOpportunities {
  data: Opportunity; // Replace 'any' with the actual type of data in your array
  success: boolean;
  message: string;
  errors: null | any; // Replace 'any' with the actual type of errors if applicable
  count: number;
}
interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: "virtual" | "physical";
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: "open" | "closed";
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any;
  perksAndBenefits: any;
  createdAt: string;
  updatedAt: string;
  orgEmail: string;
}
