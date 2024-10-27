import HomeIcon from '@mui/icons-material/Home';

export default function Home() {
    return(
        <>
        <div className='flex flex-col'>
            <div className='flex flex-row justify-center mt-52'>
                <HomeIcon className='text-cyan-700' style={{ fontSize: '48px' }}/>
            </div>
            <div className='flex flex-row justify-center mt-5'>
                <p>Welcome to Project Alpharse</p>
            </div>
        </div>
        </>
    )
}