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
    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
