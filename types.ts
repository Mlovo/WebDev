export interface ProgramSection {
  title: string;
  content: string;
}

export interface PlanItem {
  id: number;
  topic: string;
  totalHours: number;
  theoryHours: number;
  practiceHours: number;
}

export interface ScheduleItem {
  week: number;
  dateRange: string;
  topic: string;
}

export enum Semester {
  FIRST = 'I Семестр',
  SECOND = 'II Семестр'
}