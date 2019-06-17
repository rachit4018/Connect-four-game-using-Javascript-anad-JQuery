var arr = new Array();
var i=0;
var flag=0;
function check(getid)   //to check the buttton is pressed once or more than once
{
	var id=parseInt(getid);
	var col=parseInt(id%10);
	var row=parseInt(id/10);
	console.log(row);
	console.log(col);	
	if(arr[id]==id)
	{
		alert("Cannot Click more than one on same Button");
	}
	else
	{
		arr[id]=id;
		darshu(col,row,id);
	}
}
function darshu(col,row,id)  //to check player is first or second
{
	if(i%2==0)
	{
		console.log("fisrt");
		console.log(id);
		$('#'+id).css('background-color','rgb(225, 215, 0)');//gold
		checkWinner(col,row,"rgb(225,215,0)","First",id);
	}
	else
	{
		console.log("second");
		console.log(id);
		$('#'+id).css('background-color','rgb(225, 69, 0)');//orange
		checkWinner(col,row,"rgb(225,69,0)","Second",id);
	}
	i=i+1;
}
function verticalCheck(col,row,color,player,id)
{
	flag=0;
	var original=id;
	vertical(col,row+1,color,player,id+10,original);
	vertical(col,row+2,color,player,id+20,original);
	vertical(col,row+3,color,player,id+30,original);
	vertical(col,row-1,color,player,id-10,original);
	vertical(col,row-2,color,player,id-20,original);
	vertical(col,row-3,color,player,id-30,original);

}
function horizontalCheck(col,row,color,player,id)
{
	flag=0;
	vertical(col+1,row,color,player,id+1,id);
	vertical(col+2,row,color,player,id+2,id);
	vertical(col+3,row,color,player,id+3,id);
	vertical(col-1,row,color,player,id-1,id);
	vertical(col-2,row,color,player,id-2,id);
	vertical(col-3,row,color,player,id-3,id);
}
function diagonalCheck(col,row,color,player,id)
{
	var r=row;
	var c=col;
	flag=0;
	r=row+1;
	c=col+1;
	var original=parseInt(c+""+r);
	vertical(col+1,row+1,color,player,id,original);
	r=0,c=0;
	r=row+2;
	c=col+2;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);
	r=0,c=0;
	r=row+3;
	c=col+3;
	var original=parseInt(c+""+r);
	vertical(col+3,row+3,color,player,id,original);
	r=0,c=0;
	r=row-1;
	c=col-1;
	var original=parseInt(c+""+r);
	vertical(col-1,row-1,color,player,id,original);
	r=0,c=0;
	r=row-2;
	c=col-2;
	var original=parseInt(c+""+r);
	vertical(col-2,row-2,color,player,id,original);
	r=0,c=0;
	r=row-3;
	c=col-3;
	var original=parseInt(c+""+r);
	vertical(col-3,row-3,color,player,id,original);
	r=0,c=0;
	r=row+1;
	c=col-1;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);
	r=0,c=0;
	r=row+2;
	c=col-2;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);
	r=0,c=0;
	r=row+3;
	c=col-3;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);
	r=0,c=0;
	r=row-1;
	c=col+1;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);
	r=0,c=0;
	r=row-2;
	c=col+2;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);
	r=0,c=0;
	r=row-3;
	c=col+3;
	var original=parseInt(c+""+r);
	vertical(col+2,row+2,color,player,id,original);

}
function vertical(col,row,color,player,id,original)     
{
	if(row>=1 && row<=7 && col>=1 && col<=6)
	{
		var clr=$('#'+id).css("background-color");
		var cl=$('#'+original).css("background-color");
		console.log(clr);
		console.log(cl);
		if(clr==cl)
		{
			flag=flag+1;
			if(flag==3)
			{
				console.log(player);
				winner(player);
			}
		}
	}
	else
	{
		console.log("Try again");	
	}
}
function checkWinner(cl,rw,cr,plyr,id)
{
	if(plyr=="First")
	{
		verticalCheck(cl,rw,cr,plyr,id);
		horizontalCheck(cl,rw,cr,plyr,id);// diagonalCheck(col,row,cr)==true
		diagonalCheck(cl,rw,cr,plyr,id);
	}
	else if(plyr=="Second")
	{
		verticalCheck(cl,rw,cr,plyr,id);
		horizontalCheck(cl,rw,cr,plyr,id);
		diagonalCheck(cl,rw,cr,plyr,id);
	}
	else
	{
		alert("Sorry Both have played Nice!!!(:-");
	}
}
function winner(player)
{
	flag=0;
	alert(player + " -->  player is the winner");
	location.reload();
}