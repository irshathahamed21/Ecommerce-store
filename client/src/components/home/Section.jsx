import {Box, Button, Center, Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"


export const SlideText = ({ title, path }) => {
    return (
        <Text
            display={'inline'}
            border={'4px solid #0863be'}
            fontSize={['24px', '30px', '50px', '60px']}
            _hover={{ 'bg': '#0863be', 'color': 'white', 'px': ['30px', '50px', '50px', '50px'] }}
            fontWeight={900}
            px={['10px', '30px', '30px', '30px']}
            color={'#0863be'}
            className='expand'
        >
            <Link to={path}>
                {title}
            </Link>
        </Text>
    );
};

export const Section= ({img,title, gender}) => {

}



