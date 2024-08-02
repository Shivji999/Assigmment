import { FaAngular, FaBorderAll, FaHome } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoAnalytics } from 'react-icons/io5';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';
import { MdOutlineLocalActivity } from 'react-icons/md';

const Navigation = () => {
  return (
    <div className="bg-gray-800 p-4 mx-auto w-full sm:w-auto" style={{backgroundColor:"#032B43"}}>
<ul className=" space-y-4 sm: flex  items-baseline justify-between space-x-4   lg:block  ">
<LuLayoutDashboard className="text-sky-200 text-2xl md:text-3xl ml-0 md:ml-4 mb-8" />
        <li>
          <a href="#" className="flex items-center text-gray-300 hover:text-white p-2 rounded-md">
            <FaHome className="text-xl " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-300 hover:text-white p-2 rounded-md">
            <IoAnalytics className="text-xl " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-300 hover:text-white p-2 rounded-md">
            <AiOutlineDeliveredProcedure className="text-xl " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-300 hover:text-white p-2 rounded-md">
            <FcCancel className="text-xl " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-300 hover:text-white p-2 rounded-md">
            <MdOutlineLocalActivity className="text-xl " />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
