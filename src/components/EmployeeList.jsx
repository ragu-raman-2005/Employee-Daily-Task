import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

    const employees = [
        {
            id: 101,
            name: "pazhani",
            email: "pazhani@gmail.com",
            department: "IT"
        },
        {
            id: 102,
            name: "dhakshnaPriya",
            email: "dhakshnaPriya@gmail.com",
            department: "HR"
        },
        {
            id: 103,
            name: "Ram",
            email: "ram@gmail.com",
            department: "SOFTWARE DEVELOPER"
        },
        {
            id: 104,
            name: "Divya",
            email: "divya@gmail.com",
            department: "Marketing"
        },
        {
            id: 104,
            name: "Divya",
            email: "divya@gmail.com",
            department: "Marketing"
        },
        {
            id: 104,
            name: "Divya",
            email: "divya@gmail.com",
            department: "Marketing"
        },
        {
            id: 104,
            name: "Divya",
            email: "divya@gmail.com",
            department: "Marketing"
        },
        {
            id: 105,
            name: "Suresh",
            email: "suresh@gmail.com",
            department: "Sales"
        },
        {
            id: 106,
            name: "Meena",
            email: "meena@gmail.com",
            department: "Development"
        }
    ];

    return (
        <div className="employee-list">

            <h2>Employee List</h2>

            <p className="employee-count">
                Total Employees: {employees.length}
            </p>

            <div className="employee-container">

                {employees.map((employee) => (
                    <EmployeeCard
                       
                        employee={employee}
                    />
                ))}

            </div>

        </div>
    );
}

export default EmployeeList;