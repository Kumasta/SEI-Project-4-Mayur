import React, { useState } from 'react'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Stack,
	Box,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Select,
	Textarea,
	useDisclosure,
} from '@chakra-ui/react'

const CreateGiveaway = ({ regions, categories }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const firstField = React.useRef()

	return (
		<>
			<Button leftIcon={<FaPlus />} onClick={onOpen}>
				Create Giveaway
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						Create a new giveaway
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<FormLabel htmlFor='name'>Title</FormLabel>
								<Input
									ref={firstField}
									id='name'
									placeholder='Please enter giveaway title'
								/>
							</Box>

							<Box>
								<FormLabel htmlFor='url'>
									Giveaway Url
								</FormLabel>
								<InputGroup>
									<InputLeftAddon>http://</InputLeftAddon>
									<Input
										type='url'
										id='giveaway_link'
										placeholder='Please enter domain'
									/>
								</InputGroup>
							</Box>
							<Box>
								<FormLabel htmlFor='region'>Region</FormLabel>
								<Select id='region' defaultValue='segun'>
									{regions && (
										<>
											{regions.map((region) => (
												<option
													key={region.id}
													value={region.id}
												>
													{region.name}
												</option>
											))}
										</>
									)}
								</Select>
							</Box>
							<Box>
								<FormLabel htmlFor='category'>
									Category
								</FormLabel>
								<Select id='category' defaultValue='segun'>
									{categories && (
										<>
											{categories.map((category) => (
												<option
													key={category.id}
													value={category.id}
												>
													{category.name}
												</option>
											))}
										</>
									)}
								</Select>
							</Box>

							<Box>
								<FormLabel htmlFor='description'>
									Description
								</FormLabel>
								<Textarea id='description' />
							</Box>
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth='1px'>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Submit</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default CreateGiveaway
