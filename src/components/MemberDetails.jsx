const MemberDetails = ({ member }) => {
  return (
    <div className="card bg-base-100 shadow-2xl rounded-2xl w-full ">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-primary">{member.name}</h2>

        <div className="divider"></div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <p>
              <strong>Member ID:</strong> {member.memberId}
            </p>

            <p>
              <strong>NID:</strong> {member.nid}
            </p>

            <p>
              <strong>Birth Certificate:</strong> {member.birthCertificateNo}
            </p>

            <p>
              <strong>Mobile:</strong> {member.mobile}
            </p>

            <p>
              <strong>Current Branch:</strong> {member.branch}
            </p>
          </div>

          <div>
            <p>
              <strong>Father:</strong> {member.fatherName}
            </p>

            <p>
              <strong>Mother:</strong> {member.motherName}
            </p>

            <p>
              <strong>Spouse:</strong> {member.spouseName}
            </p>

            <p>
              <strong>Spouse NID:</strong> {member.spouseNid}
            </p>

            <p>
              <strong>Admission Date:</strong> {member.admissionDate}
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="font-bold">Loan Information</h3>

              <p>
                Loan Amount:
                <strong> ৳ {member.loanAmount.toLocaleString()}</strong>
              </p>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="font-bold">Risk Assessment</h3>

              <div
                className={`badge badge-lg ${
                  member.riskLevel === "High"
                    ? "badge-error"
                    : member.riskLevel === "Medium"
                      ? "badge-warning"
                      : "badge-success"
                }`}
              >
                {member.riskLevel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
