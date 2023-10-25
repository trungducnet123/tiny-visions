import Divider from './Divider';
export default function Footer() {
  return (
    <footer className='flex flex-col'>
      <aside className='p-8 md:rounded-md max-w-5xl mx-auto bg-palette-c-darker'>
        <p>
          You can visit Kabastro.com to see more useful information.
        </p>
        <a
          className='text-palette-c-accent'
          target='_blank'
          href='https://kabastro.com/'
        >
          tiny-visions
        </a>
      </aside>
      <div className='my-12'>
        <Divider />
      </div>
    </footer>
  );
}
