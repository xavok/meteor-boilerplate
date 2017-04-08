/**
 * Created by Xavok on 4/5/2017.
 */
import React from 'react';
import PrivateHeader from './PrivateHeader';
export default () => {
    return (
        <div>
            <PrivateHeader title="Dashboard"/>
            <div className="page-content">
                Dashboard page content
            </div>
        </div>
    );
};