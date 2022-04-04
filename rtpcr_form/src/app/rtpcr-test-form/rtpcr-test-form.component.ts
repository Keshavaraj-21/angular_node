import { Component, OnInit } from '@angular/core';
// import { call } from 'jasmine';

@Component({
  selector: 'app-rtpcr-test-form',
  templateUrl: './rtpcr-test-form.component.html',
  styleUrls: ['./rtpcr-test-form.component.css']
})

export class RtpcrTestFormComponent implements OnInit {

  call()
  {
  console.log("Hai output");
  var findval = document.getElementById("findval") as HTMLInputElement;
  finding(findval.value);
  
  }

  constructor() { }
  personname:string = "";
  aadharno:string = "";
  dob:string = "";
  selectcity:string = "";
  dateoftest:string = "";
  timeoftest:string = "";
  result:string = "";
  labname:string = "";
  reportno:string = "";
  gender:string = "";
  cityname:string = "";
  storeval = [];

  person = {

  };

  ngOnInit(): void {
  }
  

  checkform(){
    this.person = {
      pname:this.personname,
      aadhar:this.aadharno,
      dateofbirth:this.dob,
      city:this.selectcity,
      testdate:this.dateoftest,
      timeoftest:this.timeoftest,
      result:this.result,
      labname:this.labname,
      reportno:this.reportno,
      gender:this.gender,
      
    }

    console.log(this.person);
    this.addHtmlTableRow();
  }
  addHtmlTableRow() {
    var count = 1;
    var table=(<HTMLTableElement>document.getElementById("table"));

    var tab = Object.values(this.person)
  
    // if (!checkEmptyInput()) {
      var newRow = table.insertRow(count);
       var cell1 = newRow.insertCell(0);
       var cell2 = newRow.insertCell(1);
       var cell3 = newRow.insertCell(2);
       var cell4 = newRow.insertCell(3);
       var cell5 = newRow.insertCell(4);
       var cell6 = newRow.insertCell(5);
       var cell7 = newRow.insertCell(6);
       var cell8 = newRow.insertCell(7);
       var cell9 = newRow.insertCell(8);
       var cell10 = newRow.insertCell(9);
      
      cell1.innerHTML = `${tab[0]}`;
      cell2.innerHTML = `${tab[1]}`;
      cell3.innerHTML = `${tab[2]}`;
      cell4.innerHTML = `${tab[3]}`;
      cell5.innerHTML = `${tab[4]}`;
      cell6.innerHTML = `${tab[5]}`;
      cell7.innerHTML = `${tab[6]}`;
      cell8.innerHTML = `${tab[7]}`;
      cell9.innerHTML = `${tab[8]}`;
      cell10.innerHTML = `${tab[9]}`;
      // selectedRowToInput();
      count++;

   }
  }
  function finding(input:any)
{
  var array = new Array();
  var count = 0;
  var k=1;
  var i=1;
   var table = (<HTMLTableElement>document.getElementById("table"));
   var rowDetails =  table.getElementsByTagName("tr").length;
  console.log(rowDetails);
for(var m=0;m<rowDetails;m++)
{
  for(var g=0;g<1;g++)
  {
    var rowid = document.querySelector('#table') as HTMLTableElement;
    var rowseach = rowid.tBodies[0].rows[count].cells.item(1)?.innerText;
    console.log(rowseach);
    var resulttable = document.getElementById('result-table') as HTMLTableElement;
    var resultshow = resulttable.tBodies[0].rows[0].cells.item(1)?.innerText;
    console.log("rowseach"+rowseach);
    array.push(rowseach);
    console.log(array);
    console.log(count);
  
    if(rowseach == input)
    {
      for(var h=0;h<10;h++)
      {
       resultshow =  rowid.tBodies[0].rows[count].cells.item(h)?.innerText;
       array.push(resultshow);
      }
       var row = resulttable.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
       var cell8 = row.insertCell(7);
       var cell9 = row.insertCell(8);
       var cell10 = row.insertCell(9);
       
       
       cell1.innerHTML = `${array[i++]}`;
       cell2.innerHTML = `${array[i++]}`;
       cell3.innerHTML = `${array[i++]}`;
       cell4.innerHTML = `${array[i++]}`;
       cell5.innerHTML = `${array[i++]}`;
       cell6.innerHTML = `${array[i++]}`;
       cell7.innerHTML = `${array[i++]}`;
       cell8.innerHTML = `${array[i++]}`;
       cell9.innerHTML = `${array[i++]}`;
       cell10.innerHTML = `${array[i++]}`;
        console.log("value present" + rowseach);
  }
}
count++;
}
}
// function search() {
//   console.log((<HTMLDivElement>document.getElementById('find')).innerHTML);
//   if ((<HTMLDivElement>document.getElementById('find')).innerText == '') {
//     (<HTMLDivElement>document.getElementById('msg')).innerText =
//       'Enter the Aadhar Number to find!';
//     (<HTMLDivElement>document.getElementById('msg')).style.fontWeight = '700';
//     (<HTMLDivElement>document.getElementById('msg')).style.backgroundColor =
//       'grey';
//     (<HTMLDivElement>document.getElementById('msg')).style.padding = '10px';
//   }
//   this.input = (<HTMLInputElement>document.getElementById('find')).value;
//   this.store.forEach((element: any) => {
//     if (element.aadhar == this.input) {
//       this.searchvalue.push(element);
//     }
//   });
//   (<HTMLInputElement>document.getElementById('find')).value = '';
// }
// removefield() {
//   (<HTMLTableRowElement>document.getElementById('tr')).style.display = 'none';
// }
// }
