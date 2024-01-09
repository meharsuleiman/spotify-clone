'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // Ad authentication logic here
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className='
      relative
      group
      flex
      items-center
      rounded-md
      overflow-hidden
      gap-x-4
      bg-neutral-100/10
      hover:bg-neutral-100/20
      transition
      pr-4
    '
    >
      <div
        className='
        relative
        min-h-[64px]
        min-w-[64px]
      '
      >
        <Image src={image} fill alt='image' className='object-cover' />
      </div>
      <p className='font-medium truncate py-5'>{name}</p>

      <div
        className='
        absolute
        transition
        rounded-full
        opacity-0
        flex
        items-center
        justify-center
        p-4
        bg-green-500
        group-hover:opacity-100
        hover:scale-110
        drop-shadow-md
        right-5
      '
      >
        <FaPlay className='text-black' />
      </div>
    </button>
  );
};

export default ListItem;
