interface JobState {
  opportunities: Opportunity[];
  selectedOpportunity: Opportunity | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface EmailVerificationData {
  email: string;
  otp: string;
}

interface SignupCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "student" | "organization";
}

interface Opportunities {
  data: any[];
  success: boolean;
  message: string;
  errors: null | any;
  count: number;
}

interface SingleOpportunities {
  data: Opportunity;
  success: boolean;
  message: string;
  errors: null | any;
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
