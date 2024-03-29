import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';

export default function Footer(props) {
    const {count, filter, changeFilter} = props;

    const {activeItemCount, filter, changeFilter} = props;
    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ButtonWrapper {...props}/>
            </div>
            <div className="pull-left">
                {`${count} items left`}
                {`${activeItemCount} items left`}
            </div>
            <div className="pull-right">
                <Filter {...{filter, changeFilter}}/>
            </div>
        </footer>
    );
}
