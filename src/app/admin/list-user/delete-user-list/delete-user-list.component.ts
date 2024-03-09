import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({
  selector: 'app-delete-user-list',
  templateUrl: './delete-user-list.component.html',
  styleUrl: './delete-user-list.component.scss'
})
export class DeleteUserListComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DeleteUserListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  onNoClick(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
    
  }
}
