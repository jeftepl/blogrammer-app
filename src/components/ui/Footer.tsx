import Box from './Box'
import HorizontalRule from './HorizontalRule'
import Link from './Link'
import Text from './Text'

export default function Footer() {
	return (
		<>
			<Box>
				<Box
					styleSheet={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
						flexWrap: 'wrap',
						gap: '20px',
					}}
				>
					<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/newsletter'>
						Newsletter
					</Link>
					<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/contact'>
						Contact us
					</Link>
					<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/topics'>
						Topics
					</Link>
					<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/authors'>
						Authors
					</Link>
				</Box>
			</Box>
			<HorizontalRule />
			<Text styleSheet={{ marginTop: '16px' }} variant='body3'>
				Blogrammer 2024. All Rights reserved
			</Text>
		</>
	)
}
