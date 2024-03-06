import Link from 'next/link';

const data = [
  {
    title: '1번게시물',
  },
  {
    title: '2번게시물',
  },
  {
    title: '3번게시물',
  },
  {
    title: '4번게시물',
  },
  {
    title: '5번게시물',
  },
];

function WikiList() {
  return (
    <ul>
      {data.map((item, index) => (
        <li
          key={index}
          className="mb-2 border border-gray-200 rounded-md px-2 py-1"
        >
          <Link className="text-blue-500" href={`/wiki/${item.title}`}>
            <h3 className="font-semibold text-blue-500">
              Q. <span className="text-gray-700">{item.title}</span>
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default WikiList;
