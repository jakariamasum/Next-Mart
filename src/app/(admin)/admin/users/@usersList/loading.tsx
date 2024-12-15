const Loading = () => {
  return (
    <tbody className="bg-white divide-y min-w-full divide-gray-200">
      {[...Array(6)].map((_, index) => (
        <tr key={index} className="animate-pulse">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex space-x-2">
              <div className="h-8 w-16 bg-blue-200 rounded"></div>
              <div className="h-8 w-16 bg-red-200 rounded"></div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default Loading;
