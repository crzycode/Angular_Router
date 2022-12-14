import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
user!:{id:string,name:string};
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((data:Params) =>{
      this.user={
        id:data['id'],
        name:data['name']
      };
    });
//get the query params data and fragment data
    this.route.queryParams.subscribe((data:any) =>{
      console.log(data);
     });
     this.route.fragment.subscribe((data)=>{
      console.log(data)
     })

  }

  gotocategory(){
this.router.navigate(['/Category'])
  }
  //programatically use the query params
  getmangaldetails(){
    this.router.navigate(['/User',2,'mangal'],
    {queryParams:{page:2,search:'mangla'},
    fragment:'loading'

  })

  }
  //Retrive the query params and fragment




}
