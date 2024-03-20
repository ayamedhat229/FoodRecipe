import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../../../../admin/categories/delete-category/delete-category.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  imagePath:string='https://upskilling-egypt.com/';
 DummyImage:string='../../../../../assets/images/deleteDialog.png';
  constructor(
    public dialogRef: MatDialogRef<RecipeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  
  }
  
  onNoClick(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
    
  }
}
