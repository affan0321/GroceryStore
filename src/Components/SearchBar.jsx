// import { useState } from "react";

// export default function SearchBar({ onSearch }) {
//     const [query, setQuery] = useState("");

//     const handleInputChange = (e) => {
//         setQuery(e.target.value);
//         onSearch(e.target.value);
//     };

//     return (
//         <input
//             type="text"
//             placeholder="Search for fresh produce..."
//             value={query}
//             onChange={handleInputChange}
//             style={{
//                 width: "100%",
//                 padding: "10px",
//                 fontSize: "16px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 marginBottom: "20px",
//             }}
//         />
//     );
// }


import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for fresh produce..."
            value={query}
            onChange={handleInputChange}
            sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                        borderColor: "#007bff",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#007bff",
                    },
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}
