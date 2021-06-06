import React,{useMemo} from "react";
import MyParagraph from "./MyParagraph";
import classes from './DemoList.module.css';

const DemoList = (props) =>{
    const {items} = props;
    const sortedList = useMemo(() => {
        return props.items.sort((a,b) => a-b );
    },[items]);

    return(
       // <MyParagraph>{props.show ? 'This is New!' : ''}</MyParagraph>
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default React.memo(DemoList);