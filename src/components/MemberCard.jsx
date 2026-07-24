import React from 'react';

const MemberCard = ({ member }) => {
    return (
        <div className="card bg-base-100 shadow-xl mt-8">

            <div className="card-body">

                <h2 className="card-title">
                    Member Information
                </h2>

                <p>
                    Name : {member.name}
                </p>

                <p>
                    Member ID : {member.memberId}
                </p>

                <p>
                    Branch : {member.branch}
                </p>

                <p>
                    Loan : ৳ {member.loan}
                </p>

            </div>

        </div>
    );
};

export default MemberCard;