import { ApiProperty } from "@nestjs/swagger";

export class UserDto {   

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;
}
