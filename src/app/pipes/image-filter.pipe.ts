import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (filter === 'all') {
      return items;
    } else {
      return items.filter(item => item.category === filter );
    }
  }
}
