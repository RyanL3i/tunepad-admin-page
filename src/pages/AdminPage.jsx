import React from 'react';
import BigTitle from '../components/BigTitle';
import ListingTitle from '../components/ListingTitle';
import Submissions from '../components/Submissions';
import TunepadNavbar from '../components/TunepadNavbar.png';

const AdminPage = () => {
    return (
        <>
            <img src={TunepadNavbar} alt="Navbar" className="w-full"/>
            <div className="mt-16">
                <BigTitle />
            </div>
            <div className="flex sm:flex-col md:flex-row mt-20 w-full justify-between px-12">
                <ListingTitle
                    catText="Pending Loops" />
                <ListingTitle
                    catText="Accepted Loops" />
                <ListingTitle
                    catText="Rejected Loops" />
            </div>

            <div className="flex sm:flex-col md:flex-row w-full justify-between pl-12 pr-8">
                <Submissions
                    numOfSubs= {100} />
                <Submissions
                    numOfSubs= {40} />
                <Submissions
                    numOfSubs= {20} />
            </div>
        </>
    )
}

export default AdminPage
