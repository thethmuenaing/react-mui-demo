import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import BookmarkIcon from "@mui/icons-material/Bookmark"


export const MuiCheckbox = () => {
	const [acceptTnC , setAcceptTnC] = useState(false)
	const [skills , setSkills] = useState<string[]>([])

	console.log({acceptTnC})
	console.log({skills})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcceptTnC(event.target.checked)
	}
	const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(event.target.value)
		if(index === -1) {
			setSkills([...skills, event.target.value])
		} else {
			setSkills(skills.filter((skill) => skill !== event.target.value))
		}
	}
	return (
		<Box>
			<Box>
				<FormControlLabel label="I accept terms and conditions" control={<Checkbox size="small" color="secondary" checked={acceptTnC} onChange={handleChange} />}/>
			</Box>
			<Box>
				<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon/>} checked={acceptTnC} onChange={handleChange}/>
			</Box>
			<Box>
				<FormControl>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel label="HTML" control={<Checkbox value="html" checked={skills.includes("html")} onChange={handleSkillsChange} />}/>
						<FormControlLabel label="CSS" value="css" control={<Checkbox checked={skills.includes("css")} onChange={handleSkillsChange} />}/>
						<FormControlLabel label="JavaScript" value="javascript" control={<Checkbox checked={skills.includes("javascript")} onChange={handleSkillsChange} />}/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	)
}
