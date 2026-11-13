function EmployeeCard({ employee }) {
    return (
        <div className="employee-card">

            <div className="employee-avatar">
                
            </div>

            <h2>{employee.name}</h2>

            <p><strong>Employee ID:</strong> {employee.id}</p>

            <p><strong>Email:</strong> {employee.email}</p>

            <p><strong>Department:</strong> {employee.department}</p>

        </div>
    );
}

export default EmployeeCard;