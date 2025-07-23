export const API_KEY = 'AIzaSyCseHAylbqq173BIc5YOnp6dxLZ26pdT6k';

export const value_converter=(value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return  Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }

}