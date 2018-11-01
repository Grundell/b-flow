import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})

export class ImagePipe implements PipeTransform {

  transform(data: any ): any {
    if (!data || !data.images || !data.images.length) {
      return null;
    }

    const images = data.images;

    // get the 640 image resolution or the last (highest) available resolution
    const resolutions = images[0].resolutions;
    const image = resolutions[Math.min(resolutions.length - 1, 3)];

    // console.log(image.url);

   return image ? image.url : undefined;
    
  }

}
