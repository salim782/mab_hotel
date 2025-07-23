import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/schemas/users.schemas';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
    private jwtService: JwtService
  ) { }
'This action adds a new auth'
  async SignUp(signUpdto: SignUpDto){
    const { name, email, password } = signUpdto;

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword
    });
    const payload = { id: user._id,name: user.name ,email: user.email,password:user.password };


    const token = this.jwtService.sign({payload})

    return { 
      message: 'User registered successfully',
      user:payload,
      token 
    };
  }

  async login(loginDto:LoginDto){
    const {email,password} = loginDto;

    const user = await this.userModel.findOne({email})
    if(!user){
      throw new UnauthorizedException('Invalid email and password')
    }
    const isPasswordMatched = await bcrypt.compare(password,user.password)
    if(!isPasswordMatched){
      throw new UnauthorizedException('invalid email or password')
    }
    const payload = { id: user._id, name: user.name , email: user.email };
    const token = this.jwtService.sign({payload})
    
    return { 
      message: 'Login successful',
      user: payload,
      token
     };
  }
}
