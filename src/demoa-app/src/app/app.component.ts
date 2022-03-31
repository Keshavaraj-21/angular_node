import { Component } from '@angular/core';

@Component({
  selector: 'my-root', // should follow kebab style
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'Trichy';

onBoxValueChange(paramdata: any)
{
  console.log("Eventemitter:" + paramdata.value);
}
}
// class AboutComponenet {
  
// }
// @Component({
//   selector: 'app-root',
//   template: '<h1>Inline HTML Contents</h1>',
//   styleUrls: ['./app.component.css']
// })
