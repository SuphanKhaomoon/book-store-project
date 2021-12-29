import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: 'book-list/:category', component: BookListComponent},
  { path: 'book-create', component: BookCreateComponent},
  { path: 'ศิลปะ&ออกแบบ&ตกแต่ง/:category', component: BookListComponent},
  { path: 'การบริหาร&การจัดการ/:category', component: BookListComponent},
  { path: 'หนังสือเด็ก/:category', component: BookListComponent},
  { path: 'ตำรา&วิชาการ&อาชีพ/:category', component: BookListComponent},
  { path: 'วรรณกรรม/:category', component: BookListComponent},
  { path: 'สังคม&มนุษย์&วิทยาศาสตร์/:category', component: BookListComponent},
  { path: 'อาหาร&เครื่องดื่ม/:category', component: BookListComponent},
  { path: 'สันทนาการ&งานอดิเรก/:category', component: BookListComponent},
  { path: 'ครอบครัว&สุขภาพ/:category', component: BookListComponent},
  { path: 'จิตวิทยา-พัฒนาตัวเอง/:category', component: BookListComponent},
  { path: 'ท่องเที่ยว/:category', component: BookListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
