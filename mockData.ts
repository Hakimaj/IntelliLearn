import { Assignment, Course, ForumPost, PredictionData, User } from './types';

export const CURRENT_USER_STUDENT: User = {
  id: 's1',
  name: 'Abdulhakim Jejaw',
  role: 'student',
  avatar: 'https://picsum.photos/200',
};

export const CURRENT_USER_TEACHER: User = {
  id: 't1',
  name: 'Dr. Sarah Alazar',
  role: 'teacher',
  avatar: 'https://picsum.photos/201',
};

export const COURSES: Course[] = [
  { id: 'c1', code: 'ENG-4151', name: 'Research Methods', instructor: 'Dr. Sarah Alazar', schedule: 'Mon/Wed 10:00 AM' },
  { id: 'c2', code: 'ECE-3201', name: 'Digital Signal Processing', instructor: 'Prof. Bekele', schedule: 'Tue/Thu 02:00 PM' },
  { id: 'c3', code: 'CS-4400', name: 'Machine Learning', instructor: 'Mr. Dawit', schedule: 'Fri 09:00 AM' },
];

export const ASSIGNMENTS: Assignment[] = [
  { id: 'a1', courseId: 'c1', title: 'Chapter 1: Proposal Draft', dueDate: '2025-12-10', status: 'submitted', grade: 85 },
  { id: 'a2', courseId: 'c3', title: 'Random Forest Implementation', dueDate: '2025-12-15', status: 'pending' },
  { id: 'a3', courseId: 'c2', title: 'Fourier Transform Lab', dueDate: '2025-12-18', status: 'pending' },
  { id: 'a4', courseId: 'c1', title: 'Literature Review', dueDate: '2025-11-20', status: 'graded', grade: 92 },
];

export const PREDICTION_DATA: PredictionData = {
  studentId: 's1',
  riskLevel: 'medium',
  predictedGrade: 78,
  confidenceScore: 89,
  factors: {
    attendance: 85,
    quizScores: 72,
    platformActivity: 45, // Low activity triggers risk
  },
};

export const AT_RISK_STUDENTS = [
  { id: 's2', name: 'Rihad Gali', risk: 'high', probability: 88, issue: 'Low Attendance' },
  { id: 's3', name: 'Lalissa Soresa', risk: 'low', probability: 12, issue: 'None' },
  { id: 's4', name: 'Abebe Bikila', risk: 'medium', probability: 45, issue: 'Missing Assignments' },
  { id: 's5', name: 'Tigist Assefa', risk: 'high', probability: 92, issue: 'Failed Midterm' },
];

export const FORUM_POSTS: ForumPost[] = [
  { 
    id: 'f1', 
    author: 'Rihad Gali', 
    role: 'student', 
    title: 'Help with Random Forest Hyperparameters?', 
    content: 'I am trying to tune the model for the assignment but getting overfitting. Any tips?', 
    timestamp: '2 hours ago', 
    replies: 5, 
    tags: ['ML', 'Help'] 
  },
  { 
    id: 'f2', 
    author: 'Dr. Sarah Alazar', 
    role: 'teacher', 
    title: 'Announcement: Midterm Schedule Change', 
    content: 'Due to the campus holiday, the midterm for ENG-4151 is moved to Friday.', 
    timestamp: '1 day ago', 
    replies: 0, 
    tags: ['Announcement', 'Urgent'] 
  },
  { 
    id: 'f3', 
    author: 'Lalissa Soresa', 
    role: 'student', 
    title: 'Resources for Literature Review', 
    content: 'Found some great papers on Educational Data Mining in Ethiopia. Sharing the links below.', 
    timestamp: '3 days ago', 
    replies: 12, 
    tags: ['Resources', 'Research'] 
  }
];