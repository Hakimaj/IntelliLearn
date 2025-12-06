export type UserRole = 'student' | 'teacher' | 'admin' | null;

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  instructor: string;
  schedule: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded' | 'late';
  grade?: number;
}

export interface PredictionData {
  studentId: string;
  riskLevel: 'low' | 'medium' | 'high';
  predictedGrade: number;
  confidenceScore: number;
  factors: {
    attendance: number;
    quizScores: number;
    platformActivity: number;
  };
}

export interface ForumPost {
  id: string;
  author: string;
  role: 'student' | 'teacher';
  title: string;
  content: string;
  timestamp: string;
  replies: number;
  tags: string[];
}