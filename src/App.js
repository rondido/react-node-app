import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {createTheme, makeStyles, withStyles} from "@mui/material/styles";
import withWidth from "@mui/material/Hidden/withWidth"; //css 적용하기

const theme = createTheme();

const styles = makeStyles((theme) =>{
    root:{
        width: '100%',

    }
});



const styles = theme => ({
    root:{
        width: '100%',
        marginTop:theme.spacing.unit * 3,
        overflowX:"auto"
    },
    table:{
        minWidth: 1080
    }
})


const customers =
    [{
    'id': 1,
    'image' : 'https://placeimg.com/64/64/1', //랜덤으로 이미지 보여주는 사이트
    'name':'박짜장',
    'birthday' : '941118',
    'gender' : '남자',
    'job' : '대학생'
    },
    {
    'id': 2,
    'image' : 'https://placeimg.com/64/64/2', //랜덤으로 이미지 보여주는 사이트
    'name':'박짬뽕',
    'birthday' : '941110',
    'gender' : '여자',
    'job' : '대학생'
    },
    {
    'id': 3,
    'image' : 'https://placeimg.com/64/64/3', //랜덤으로 이미지 보여주는 사이트
    'name':'박라면',
    'birthday' : '941210',
    'gender' : '남자',
    'job' : '직장인'
    }
    ]

function App() { // 웹사이트 화면 출력
    const { classes } = this.props;
    return (
        <Paper className={classes.root}>
            <Table className={ classes.table}>
                <TableHead>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                </TableHead>
                <TableBody>
                    {customers.map( a => { return (<Customer
                      key={a.id}
                      id={a.id}
                       image={a.image}
                       name={a.name}
                       birthday={a.birthday}
                      gender={a.gender}
                       job={a.job}
                       />)})}
                   </TableBody>
            </Table>
    </Paper>
  );
}

export default withStyles(styles(App));
