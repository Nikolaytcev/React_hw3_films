import { Star } from "../Star/Star"
import { nanoid } from 'nanoid'

interface myCount {
    count: number
}

export const Stars = ({ count }: myCount) => {
  if (count >= 1 && count <= 5) {
    const idList = [];
    for (let i=0;i<count;i++) {idList.push(nanoid())}
    return (
        <ul className="card-body-stars u-clearfix">
            {idList.map(i => <li className="star" key={i}><Star/></li>)}
        </ul>
      )
  }
  else {
    return (
        <ul className="card-body-stars u-clearfix"></ul>
      )
  }
  
}
