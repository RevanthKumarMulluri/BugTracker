import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(items: any[],searchText: string) {
    if(!items) {
      return [];
    }
    if(!searchText){
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    console.log(items);
    return items.filter(it => {
      if(it.name.toLocaleLowerCase().includes(searchText)){
         return it.name.toLocaleLowerCase().bold();
      };
    });
  }

}
