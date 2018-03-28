import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selcted department with id = {{ departmentId }}</h3>
    <div>
      <button (click)="gotoDepartments()" > Back </button> &nbsp;
      <button (click)="goPrevious()"> Previous </button> &nbsp;
      <button (click)="goNext()"> Next </button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {    // always get updated id
      this.departmentId = parseInt(params.get('id'));
    });
  }

  goPrevious() {        // method to go next department
    const previousId = this.departmentId - 1;
     this.router.navigate(['/departments', previousId]);
  }
  goNext() {          // method to go previous department
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {        // get back to department list
    const selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});    // relatively routing
  }
}
