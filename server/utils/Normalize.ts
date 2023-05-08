export class Normalize {
  static response: any = (str:any)=>{

    const apiResponse = str;


    const obj = JSON.parse(apiResponse.substring(apiResponse.indexOf('(')+1, apiResponse.lastIndexOf(')')));

    return obj;

  };
}