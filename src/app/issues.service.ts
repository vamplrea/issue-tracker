import { Injectable, OnInit } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService implements OnInit {
  private issues: Issue[] = issues;
  constructor() {}
  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }
  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;

    this.issues.push(issue);
  }
  ngOnInit(): void {
    //this.issues = ;
  }
  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date(),
    };

    const index = this.issues.findIndex((i) => i === issue);

    this.issues[index] = selectedIssue;
  }
}
