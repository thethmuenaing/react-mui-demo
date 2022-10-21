import { Table, 
	TableContainer, 
	TableHead, 
	TableBody, 
	TableRow, 
	TableCell, 
	Paper  
} from "@mui/material"



export const MuiTable = () => {
	return (
		<TableContainer component={Paper} sx={{maxHeight:"300px"}}>
			<Table aria-label="simple table" stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>First name</TableCell>
						<TableCell>Last name</TableCell>
						<TableCell align="center">Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						TableData.map((row)=>(
							<TableRow key={row.id} sx={{"&:last-child td, &:last-child th": { border:0}}}>
								<TableCell>{row.id}</TableCell>
								<TableCell>{row.first_name}</TableCell>
								<TableCell>{row.last_name}</TableCell>
								<TableCell align="center">{row.email}</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
}


const TableData = [
	{
		"id": 1,
		"first_name": "Robby",
		"last_name": "Haster",
		"email": "rhaster0@ameblo.jp",
		"gender": "Female",
		"ip_address": "27.12.108.255"
	}, {
		"id": 2,
		"first_name": "Mateo",
		"last_name": "Godbold",
		"email": "mgodbold1@opera.com",
		"gender": "Male",
		"ip_address": "89.72.15.111"
	}, {
		"id": 3,
		"first_name": "Emlynne",
		"last_name": "Crame",
		"email": "ecrame2@yellowbook.com",
		"gender": "Female",
		"ip_address": "225.92.240.234"
	}, {
		"id": 4,
		"first_name": "Hatti",
		"last_name": "Danhel",
		"email": "hdanhel3@google.cn",
		"gender": "Agender",
		"ip_address": "4.168.49.4"
	}, {
		"id": 5,
		"first_name": "Dynah",
		"last_name": "Churm",
		"email": "dchurm4@youtube.com",
		"gender": "Female",
		"ip_address": "23.51.242.143"
	}, {
		"id": 6,
		"first_name": "Sawyer",
		"last_name": "Jerg",
		"email": "sjerg5@opensource.org",
		"gender": "Male",
		"ip_address": "60.68.237.137"
	}, {
		"id": 7,
		"first_name": "Mindy",
		"last_name": "Sindle",
		"email": "msindle6@stumbleupon.com",
		"gender": "Female",
		"ip_address": "8.75.127.221"
	}, {
		"id": 8,
		"first_name": "Jacquetta",
		"last_name": "Robardey",
		"email": "jrobardey7@soundcloud.com",
		"gender": "Female",
		"ip_address": "247.255.46.73"
	}, {
		"id": 9,
		"first_name": "Angelita",
		"last_name": "Flowers",
		"email": "aflowers8@google.com.hk",
		"gender": "Female",
		"ip_address": "158.98.168.203"
	}, {
		"id": 10,
		"first_name": "Edy",
		"last_name": "Nickoll",
		"email": "enickoll9@theatlantic.com",
		"gender": "Female",
		"ip_address": "69.209.53.170"
	}]

