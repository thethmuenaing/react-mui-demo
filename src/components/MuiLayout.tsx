import { Box, Stack, Divider } from "@mui/material"



export const MuiLayout = () => {
	return (
		<Stack 
			sx={{border: "1px solid"}} 
			direction="row"
			spacing={2}
			divider={<Divider orientation="vertical" flexItem />}
		>
			<Box sx={{
				backgroundColor: "primary.main",
				color:"white",
				height:"100px",
				width:"100px",
				padding:"16px",
				"&:hover" : {
					backgroundColor: "primary.light"
				}
			}}>
				MuiLayout
			</Box>
			<Box 
			display="flex"
			width="100px"
			height="100px"
			bgcolor="success.light"
			p={2}
			>

			</Box>
		</Stack>
	)
}
