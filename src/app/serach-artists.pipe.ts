import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachArtists'
})
export class SerachArtistsPipe implements PipeTransform {

  transform(pipeData: any, pipeModifier: string): any {
    return pipeData.filter((eachItem: any) => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    })
  }

}
