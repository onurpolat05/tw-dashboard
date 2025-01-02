import React from "react";

interface TeamMember {
  role: string;
  count?: number;
}

interface Department {
  name: string;
  members: TeamMember[];
}

const HRStructureChart = () => {
  const departments: Department[] = [
    {
      name: "Tech Team",
      members: [
        { role: "Frontend Developer", count: 1 },
        { role: "Backend Developer", count: 1 },
        { role: "Full Stack Developer", count: 3 },
        { role: "AI Engineer", count: 1 },
        { role: "Data Analyst", count: 1 },
        { role: "Freelancer (Dev-Ops-Full Stack)", count: 2 },
      ],
    },
    {
      name: "Marketing Team",
      members: [
        { role: "Marketing Manager", count: 1 },
        { role: "Content Marketing Specialist", count: 1 },
      ],
    },
    {
      name: "Customer Success Team",
      members: [
        { role: "Customer Success Manager", count: 1 },
        { role: "Customer Success Reps.", count: 2 },
      ],
    },
    {
      name: "Operations Team",
      members: [
        { role: "HR Professional", count: 1 },
        { role: "Bookkeeper (Part-Time)", count: 1 },
      ],
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-gradient-to-br from-gray-50 to-white rounded-lg">
      <div className="min-w-[800px] p-8">
        {/* Founding Team */}
        <div className="flex flex-col items-center">
          <div className="px-10 py-5 bg-gradient-to-br from-indigo-50 to-white rounded-xl border-2 border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-indigo-900 font-semibold text-lg">
              Founding Team
            </span>
          </div>
          <div className="w-[3px] h-20 bg-gradient-to-b from-indigo-200 to-purple-200"></div>
        </div>

        {/* Departments Container */}
        <div className="relative">
          <div className="grid grid-cols-4 gap-8">
            {/* Departments with Lines */}
            {departments.map((dept, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Vertical Line */}
                <div className="w-[3px] h-12 bg-gradient-to-b from-purple-200 to-purple-100"></div>

                {/* Horizontal Line - Only between vertical lines */}
                {index > 0 && index < departments.length - 1 && (
                  <>
                    {/* Left horizontal line */}
                    <div className="absolute top-0 right-1/2 w-[calc(50%+1rem)] h-[3px] bg-gradient-to-r from-indigo-200 to-purple-200"></div>
                    {/* Right horizontal line */}
                    <div className="absolute top-0 left-1/2 w-[calc(50%+1rem)] h-[3px] bg-gradient-to-r from-purple-200 to-indigo-200"></div>
                  </>
                )}
                {/* First department - only right line */}
                {index === 0 && (
                  <div className="absolute top-0 left-1/2 w-[calc(50%+1rem)] h-[3px] bg-gradient-to-r from-purple-200 to-indigo-200"></div>
                )}
                {/* Last department - only left line */}
                {index === departments.length - 1 && (
                  <div className="absolute top-0 right-1/2 w-[calc(50%+1rem)] h-[3px] bg-gradient-to-r from-indigo-200 to-purple-200"></div>
                )}

                {/* Department Card */}
                <div className="w-full px-6 py-4 bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow mb-8">
                  <span className="text-purple-900 font-semibold text-base block text-center">
                    {dept.name}
                  </span>
                </div>

                {/* Team Members */}
                <div className="space-y-3 w-full">
                  {dept.members.map((member, mIndex) => (
                    <div
                      key={mIndex}
                      className="group px-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-purple-200 hover:bg-purple-50/30"
                    >
                      <span className="text-gray-700 text-sm block text-center group-hover:text-purple-700 transition-colors">
                        {member.role}
                        {member.count && member.count > 1
                          ? ` (${member.count})`
                          : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRStructureChart;
