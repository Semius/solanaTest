import {Container,TextField,Button,Grid,} from "@material-ui/core"
import {useState} from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { classicNameResolver } from "typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      color:"white",
      backgroundColor:"white"
      },
    bg:{
      backgroundColor:"white"
    }
    },
));

export default function CreateMusicToken() {
  const classes = useStyles();
  const [data,setData] = useState({song_name:"",author_name:"",public_address:"",name_of_token:""})
  
  const handleSubmit = (e) => {
    e.preventdefault();

  }
  return (
    <Container fixed className={classes.bg}>
      <Grid container>
      <form>
      <Grid item xs={12}>
      <TextField  required id="standard-required" label="Required" defaultValue="Song Name" value={data.song_name} onChange={(e:any) => setData({...data,song_name:e.target.value})} />
      </Grid>
      <Grid item xs={12}>
      <TextField  required id="standard-required" label="Required" defaultValue="Author Name" value={data.author_name} onChange={(e:any) => setData({...data,author_name:e.target.value})} />
      </Grid>
      <Grid item xs={12}>
      <TextField  required id="standard-required" label="Required" defaultValue="Public Address" value={data.public_address} onChange={(e:any) => setData({...data,public_address:e.target.value})} />
      </Grid>
      <Grid item xs={12}>
      <TextField  required id="standard-required" label="Required" defaultValue="name of the Token" value={data.name_of_token} onChange={(e:any) => setData({...data,name_of_token:e.target.value})} />
      </Grid>
      <Button onSubmit={handleSubmit}>Create new token</Button>
      <h2>{JSON.stringify(data)}</h2>
      </form>
      </Grid>
    </Container>
  )
}
