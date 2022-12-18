/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileTesting123 } from './entities/profile.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileTesting123)
    private readonly profileRepository: Repository<ProfileTesting123>,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const profile = await this.profileRepository.save(createProfileDto);

    return profile;
  }

  async findAll() {
    return this.profileRepository.find();
  }

  async findOne(id: number) {
    return this.profileRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  async remove(id: number) {
    return this.profileRepository.delete(id);
  }
}
