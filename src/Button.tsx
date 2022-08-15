import React from 'react';


type ButtonType = {
    nickName: string
    callBack: ()=>void
}
export const Button = (props: ButtonType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.nickName}</button>
        </div>
    );
};

