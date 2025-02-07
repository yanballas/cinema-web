import './Content.scss';

function Content(props) {
	
	const { children } = props;
	
	return <main className='content'>{children}</main>
};

export default Content;