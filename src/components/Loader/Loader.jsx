import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
    return (
        <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperStyle={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            colors={['#0B44CD', '#3470FF', '#6483e8', '#5d98e6', '#8bb3df']}
        />
    );
};

export default Loader;